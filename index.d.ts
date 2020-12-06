import { Canvas, CanvasRenderingContext2D } from "canvas";

export class Canvacord {
    public static trigger(image: string | Buffer): Promise<Buffer>;
    public static invert(image: string | Buffer): Promise<Buffer>;
    public static sepia(image: string | Buffer): Promise<Buffer>;
    public static greyscale(image: string | Buffer): Promise<Buffer>;
    public static brightness(image: string | Buffer, amount: number): Promise<Buffer>;
    public static darkness(image: string | Buffer, amount: number): Promise<Buffer>;
    public static threshold(img: string | Buffer, amount: number): Promise<Buffer>;
    public static convolute(img: string | Buffer, matrix: number[], opaque: boolean): Promise<Buffer>;
    public static createProgressBar(track?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        color?: string;
        stroke?: boolean;
        lineWidth?: number;
    }, bar?: {
        width?: number;
        color?: string;
    }): Buffer;
    public static blur(image: string | Buffer, lvl?: number): Promise<Buffer>;
    public static sharpen(image: string | Buffer, lvl?: number): Promise<Buffer>;
    public static burn(image: string | Buffer, lvl?: number): Promise<Buffer>;
    public static color(color?: string, height?: number, width?: number): Buffer;
    public static circle(image: string | Buffer): Promise<Buffer>;
    public static rectangle(x: number, y: number, width: number, height: number, color: string, stroke: boolean, lineWidth: number, rounded?: boolean): Buffer;
    public static fuse(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    public static resize(image: string | Buffer, width: number, height: number): Promise<Buffer>;
    public static kiss(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    public static spank(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    public static slap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    public static batslap(image1: string | Buffer, image2: string | Buffer): Promise<Buffer>;
    public static beautiful(image: string | Buffer): Promise<Buffer>;
    public static facepalm(image: string | Buffer): Promise<Buffer>;
    public static rainbow(image: string | Buffer): Promise<Buffer>;
    public static gay(image: string | Buffer): Promise<Buffer>;
    public static rip(image: string | Buffer): Promise<Buffer>;
    public static trash(image: string | Buffer): Promise<Buffer>;
    public static hitler(image: string | Buffer): Promise<Buffer>;
    public static colorfy(image: string | Buffer, color: string): Promise<Buffer>;
    public static jokeOverHead(image: string | Buffer): Promise<Buffer>;
    public static spotify(options?: {
        title?: string;
        artist?: string;
        album?: string;
        image?: string | Buffer;
        start?: number;
        end?: number;
    }): Promise<Buffer>;
    public static tictactoe(fill?: {
        a1?: "X" | "O";
        b1?: "X" | "O";
        c1?: "X" | "O";
        a2?: "X" | "O";
        b2?: "X" | "O";
        c2?: "X" | "O";
        a3?: "X" | "O";
        b3?: "X" | "O";
        c3?: "X" | "O";
    }, color?: {
        bg?: string;
        bar?: string;
        x?: string;
        o?: string;
    }): Buffer;
    public static opinion(avatar: string | Buffer, msg: string): Promise<Buffer>;
    public static gradient(colorFrom: string, colorTo: string): Buffer;
    public static write(data: Buffer, name: string): void;
    private get assets(): (type: "FONT" | "IMAGE") => any;    
}

export interface plugins {
    circle(ctx: CanvasRenderingContext2D, w: number, h: number): CanvasRenderingContext2D;
    convolute(ctx: CanvasRenderingContext2D, canvas: Canvas, matrix: number[], opaque: boolean): void;
    rectangle(ctx: CanvasRenderingContext2D, x: number, y: number, height: number, width: number, color: string, stroke: boolean, lineWidth: number): CanvasRenderingContext2D;
    round(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): CanvasRenderingContext2D;
    abbrev(num: number | string): string;
}