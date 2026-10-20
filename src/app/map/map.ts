import { Component, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Country as CountryService, CountryData } from '../services/country';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [FormsModule, Header],
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
})

// Rendered using innerHTML with svgContent()
export class Map implements OnInit {
  selectedCountry = signal<CountryData | null>(null);
  loading = signal(false);
  countryCode = '';
  svgContent = signal<SafeHtml>('');
  mapError = signal<string | null>(null);

  // Loaded using HttpClient
  constructor(
    private countryService: CountryService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.http.get('/assets/map_image.svg', { responseType: 'text' }).subscribe({
      next: (svg) => {
        this.svgContent.set(this.sanitizer.bypassSecurityTrustHtml(svg));
        this.mapError.set(null);
      },
      error: (err) => {
        console.error('Failed to load map SVG:', err);
        this.mapError.set('Failed to load map. Please refresh the page.');
      },
    });
  }

  // Mouse Event Handler
  onMapClick(event: MouseEvent) {
    const target = event.target as SVGElement;
    const code = target.id;
    if (code) {
      this.fetchCountry(code);
    }
  }

  onSearch() {
    if (this.countryCode.trim()) {
      this.fetchCountry(this.countryCode.trim().toUpperCase());
    }
  }

  //Component Method
  fetchCountry(code: string) {
    this.loading.set(true);
    this.countryService.getCountryByCode(code).subscribe({
      next: (data: any) => {
        this.selectedCountry.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
