import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {timer} from "rxjs/observable/timer";
import {of} from "rxjs/observable/of";

@Injectable()
export class PreloadStrategy  implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const loadRoute = (delay) => delay
      ? timer(1000).pipe(flatMap(() => load()))
      : load();
    console.log('Preload path:' + route.path + 'delay ' + route.data['delay']);
    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}
