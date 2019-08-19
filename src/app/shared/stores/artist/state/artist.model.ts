import { ID } from '@datorama/akita';
import { Image } from 'src/app/shared/models/image.interface';

export interface Artist {
  id: ID;
  name: string;
  genres: Array<string>;
  href: string;
  images: Array<Image>;
  popularity: number;
  type: string;
  uri: string;
}

/**
 * A factory function that creates Artist
 */
export function createArtist(params: Partial<Artist>) {
  return {

  } as Artist;
}
