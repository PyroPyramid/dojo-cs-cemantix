import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseWord} from "../model/responseWord.model";
import {GuessWord} from "../model/guessWord.model";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private httpClient = inject(HttpClient);

  public getPokemonValue(guess: GuessWord): Observable<ResponseWord>{
    const result = this.httpClient.get<ResponseWord>(`https://deno-hello-world-sejy663a8381.pyropyramid.deno.net/${guess.value}`);
    return result;
  }
}
