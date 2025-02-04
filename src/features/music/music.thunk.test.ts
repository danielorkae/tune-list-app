import { configureStore } from "@reduxjs/toolkit";
import { describe, expect, it, Mock, vi } from "vitest";
import musicReducer from "./music.slice";
import { fetchDeezerChart } from "./music.thunk";

globalThis.fetch = vi.fn();

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

describe("fetchTopMusics", () => {
  it("should fetch and return top musics", async () => {
    const mockResponse = {
      tracks: {
        items: [
          {
            track: {
              id: "1",
              name: "Song 1",
              artists: [{ name: "Artist 1" }],
            },
          },
          {
            track: {
              id: "2",
              name: "Song 2",
              artists: [{ name: "Artist 2" }],
            },
          },
        ],
      },
    };

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as Mock;

    const result = await store.dispatch(fetchDeezerChart());

    expect(result.payload).toEqual([
      { id: "1", title: "Song 1", artists: ["Artist 1"] },
      { id: "2", title: "Song 2", artists: ["Artist 2"] },
    ]);
  });

  it("should handle fetch error", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.reject(new Error("API Error"))
    ) as Mock;

    await store.dispatch(fetchDeezerChart());

    expect(store.getState().music.error).toBe("API Error");
  });
});
