import { Music } from "@/app/domain/music";
import { describe, expect, it } from "vitest";
import musicReducer, { setMusics } from "./music.slice";

describe("music slice", () => {
  it("should return the initial state", () => {
    expect(musicReducer(undefined, { type: "" })).toEqual({
      musics: [],
      loading: false,
    });
  });

  it("should handle setMusics", () => {
    const previousState = { musics: [], loading: false };
    const newMusics: Music[] = [
      { id: 1, title: "Song 1", artists: ["Artist 1"] },
      { id: 2, title: "Song 2", artists: ["Artist 2"] },
    ];
    expect(musicReducer(previousState, setMusics(newMusics))).toEqual({
      musics: newMusics,
      loading: false,
    });
  });
});
