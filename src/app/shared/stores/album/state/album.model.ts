import { ID } from '@datorama/akita';

export interface Album {
  id: ID;
}

/**
 * A factory function that creates Albums
 */
export function createAlbum(params: Partial<Album>) {
  return {

  } as Album;
}
