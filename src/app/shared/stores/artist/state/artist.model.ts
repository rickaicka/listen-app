import { ID, guid } from '@datorama/akita';
import { Image } from 'src/app/shared/models/image.interface';

export class Artist {
  id: ID;
  name: string;
  genres: string[];
  href: '';
  images: Image[];
  popularity: number;
  type: string;
  uri: string;
}

export class ArtistList {
  artists: Artist[];
}

/**
 * A factory function that creates Artist
 */
export function createArtist(params: Partial<Artist>) {
  return {
    id: guid(),
    name: '',
    genres: [],
    href: '',
    images: [],
    popularity: 0,
    type: '',
    uri: ''
  } as Artist;
}

export function createListArtist(params: Partial<ArtistList>) {
  return {
    artists: []
  } as ArtistList;
}
