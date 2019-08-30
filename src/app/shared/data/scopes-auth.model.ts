import { ID } from '@datorama/akita';

export interface ScopesAuth {
  scopes: string;
  'client_id': string;
  'response_type': string;
  'redirect_uri': string;

}

/**
 * A factory function that creates ScopesAuth
 */
export function createScopesAuth() {
  return {
    // tslint:disable-next-line: max-line-length
    scopes: 'playlist-read-collaborative playlist-modify-private user-modify-playback-state user-read-private user-library-modify user-follow-modify user-read-recently-played streaming user-read-currently-playing playlist-modify-public user-read-playback-state app-remote-control user-library-read user-follow-read user-read-email playlist-read-private user-top-read',
    client_id: '18de412228b547dea835a415fca22bd6',
    response_type: 'code',
    redirect_uri: 'http://localhost:4200/'
  } as ScopesAuth;
}
