import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CountryData {
  id: string;
  name: string;
  capital: string;
  region: string;
  incomeLevel: string;
  lendingType: string;
  longitude: string;
  latitude: string;
}

@Injectable({
  providedIn: 'root',
})

// Service Method for 2-letter country code requirement
export class Country {
  getCountryByCode(code: string): Observable<CountryData> {
    // Http call to World Bank API
    return this.http.get<any>(`https://api.worldbank.org/v2/country/${code}?format=json`).pipe(
      map((response) => {
        const c = response?.[1]?.[0];
        if (!c) {
          throw new Error(`Country not found: ${code}`);
        }
        return {
          id: c.id,
          name: c.name,
          capital: c.capitalCity || 'N/A',
          region: c.region?.value || 'N/A',
          incomeLevel: c.incomeLevel?.value || 'N/A',
          lendingType: c.lendingType?.value || 'N/A',
          longitude: c.longitude || 'N/A',
          latitude: c.latitude || 'N/A',
        };
      }),
    );
  }

  private url = 'https://api.worldbank.org/v2/country?format=json';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryData[]> {
    return this.http.get<any>(this.url).pipe(
      map((response) => {
        return response[1].map((c: any) => ({
          id: c.id,
          name: c.name,
          capital: c.capitalCity || 'N/A',
          region: c.region?.value || 'N/A',
          incomeLevel: c.incomeLevel?.value || 'N/A',
          lendingType: c.lendingType?.value || 'N/A',
          longitude: c.longitude || 'N/A',
          latitude: c.latitude || 'N/A',
        }));
      }),
    );
  }
}
