import { Scale } from '../object/obj.scale';
import { SCALES } from './mock-scales';
import { Injectable } from 'angular2/core';

@Injectable()
export class ScaleService {
    getScales() {
        return Promise.resolve(SCALES);
    }

    getScale(id: number) {
        return Promise.resolve(SCALES).then(
                scale => scale.filter(scale => scale.id === id)[0]
        );
    }
}
