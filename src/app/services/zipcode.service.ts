import { Injectable } from "@angular/core";

@Injectable()
export class ZipcodeService {
  private readonly localStorageKey = 'zipcode';

  public get zipcodes(): string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  public set zipcodes(value: string[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(value));
  }

  constructor() {
    this.initializeZipcodesLocalStorage();
  }

  public addZipcode(value: string): void {
    this.zipcodes = [...this.zipcodes, value];
  }

  public isInLocalStorage(zipcode: string): boolean {
    return this.zipcodes.indexOf(zipcode) === -1 ? false: true
  }

  private initializeZipcodesLocalStorage(): void {
    const localStorageValue = localStorage.getItem(this.localStorageKey);
    if (!localStorageValue || !Array.isArray(JSON.parse(localStorageValue))) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }
}