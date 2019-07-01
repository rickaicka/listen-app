import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  isLoading: boolean;
  constructor() { }

  public show(): boolean {
    return true;
  }
  public hide(): boolean {
    return false;
  }
}
