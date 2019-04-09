import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    getBooks(): Observable<Book[]> {
        return of(BOOKS);
    }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetchde heroes');
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fethced hero id = ${id}`);
        return of(HEROES.find(hero => hero.id === id))
    }

    constructor(private messageService: MessageService) { };

}
