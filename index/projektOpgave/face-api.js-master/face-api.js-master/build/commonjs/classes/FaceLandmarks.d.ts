import { Dimensions, IDimensions, Point, Rect } from 'tfjs-image-recognition-base';
import { FaceDetection } from './FaceDetection';
export interface IFaceLandmarks {
    positions: Point[];
    shift: Point;
}
export declare class FaceLandmarks implements IFaceLandmarks {
    protected _shift: Point;
    protected _positions: Point[];
    protected _imgDims: Dimensions;
    constructor(relativeFaceLandmarkPositions: Point[], imgDims: IDimensions, shift?: Point);
    readonly shift: Point;
    readonly imageWidth: number;
    readonly imageHeight: number;
    readonly positions: Point[];
    readonly relativePositions: Point[];
    forSize<T extends FaceLandmarks>(width: number, height: number): T;
    shiftBy<T extends FaceLandmarks>(x: number, y: number): T;
    shiftByPoint<T extends FaceLandmarks>(pt: Point): T;
    /**
     * Aligns the face landmarks after face detection from the relative positions of the faces
     * bounding box, or it's current shift. This function should be used to align the face images
     * after face detection has been performed, before they are passed to the face recognition net.
     * This will make the computed face descriptor more accurate.
     *
     * @param detection (optional) The bounding box of the face or the face detection result. If
     * no argument was passed the position of the face landmarks are assumed to be relative to
     * it's current shift.
     * @returns The bounding box of the aligned face.
     */
    align(detection?: FaceDetection | Rect): Rect;
    protected getRefPointsForAlignment(): Point[];
}
