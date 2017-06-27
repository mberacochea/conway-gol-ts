import { Cell } from "./cell";

/**
 * Game Manager
 * 
 * @class Game
 */
export class Game {

  /**
   * The Canvas that contains the game
   * 
   * @private
   * @type {HTMLCanvasElement}@memberof Game
   */
  private canvas: HTMLCanvasElement;

  /**
   * Canvas Context Rendering
   * 
   * @private
   * @type {CanvasRenderingContext2D}@memberof Game
   */
  private ctx: CanvasRenderingContext2D;

  /**
   * X Dimension
   * 
   * @private
   * @type {Number}@memberof Game
   */
  private x: Number;

  /**
   * Y Dimension
   * 
   * @private
   * @type {Number}@memberof Game
   */
  private y: Number;

  /**
   * The Interval of the game execution
   * 
   * @private
   * @memberof Game
   */
  private interval; object;
  
  /**
   * Matriz of Cells
   * 
   * @private
   * @type {*}@memberof Game
   */
  private cells: Array<Array<Cell>> = new Array<Array<Cell>>();

  /**
   * Creates an instance of Game.
   * @memberof Game
   */
  constructor(x: Number, y: Number) {
    this.canvas = <HTMLCanvasElement>document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
  }

  /**
   * Init the game. The canvas and the cells in the canvas
   * 
   * @private
   * @memberof Game
   */
  public init() {
    for (let y = 0; y < this.y; y++) {
      this.cells.push(new Array<Cell>());
      for (let x = 0; x < this.x; x++) {
        this.cells[y].push(new Cell(x, y, this.ctx))
      }
    }
  }

  /**
   * Start the game
   */
  public start(): void {
    var t = setInterval(() => {
      for (let y = 0; y < this.y; y++) {
        this.cells.push(new Array<Cell>());
        for (let x = 0; x < this.x; x++) {
          this.cells[y][x].render();
        }
      }
    }, 1000);
    this.interval = t;
  }

  /**
   * Stop the game
   * 
   * @memberof Game
   */
  public stop() : void {
    clearInterval(this.interval);
  }
}