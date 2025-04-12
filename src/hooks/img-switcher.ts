"use client";
export interface ImageInfo {
  name: string;
  url: string;
  descritpion: string;
}
import { useEffect, useState } from "react";

export function useRandomUrl(data: ImageInfo[], interval = 5000) {
  const [current, setCurrent] = useState(data[0]);

  useEffect(() => {
    let imgNum = 1;

    const id = setInterval(() => {
      setCurrent(() => {
        const next = data[imgNum % data.length];
        imgNum++;
        return next;
      });
    }, interval);

    return () => clearInterval(id);
  }, [data, interval]);

  return current;
}
