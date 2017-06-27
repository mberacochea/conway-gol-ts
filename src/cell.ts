/**
 * An autonomous cell rules:
 * 
 *   Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
 *   Any live cell with two or three live neighbours lives on to the next generation.
 *   Any live cell with more than three live neighbours dies, as if by overpopulation.
 *   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 *
 * @class Cell
 */
export class Cell {
  private xPosition : number;
  private yPosition : number;
  private ctx: CanvasRenderingContext2D;
  private alive : boolean;

  /**
   * Creates an instance of Cell.
   * @param {number} x x position on the grid
   * @param {number} y y position on the grid
   * @memberof Cell
   */
  constructor(x : number, y: number, ctx: CanvasRenderingContext2D) {
    this.xPosition = x;
    this.yPosition = y;
    this.ctx = ctx;
    this.alive = true;
  }

  /**
   * Update the cell live status
   * 
   * @param {number} neighbours The number of living neighbours
   * @returns {void} 
   * 
   * @memberof Cell
   */
  public updateStatus(neighbours: number) : void {
    if (neighbours < 2) {
      this.alive = false;
      return;
    }
    if ((neighbours === 2 || neighbours === 3) && this.alive) {
      return;
    }
    if (neighbours > 3) {
      this.alive = false;
      return;
    }
    if (neighbours === 3 && !this.alive) {
      this.alive = true;
      return;
    }
  }

  /**
   * Renders the cell, this depends on the alive status
   * 
   * @private
   * @returns {void} 
   * 
   * @memberof Cell
   */
  public render() : void {
    // get position
    const xPos = this.xPosition * 5;
    const yPos = this.yPosition * 5;
    // draw
    this.ctx.fillStyle = Math.random() > 0.5 ? "yellow" : "black";
    this.ctx.fillRect(xPos, yPos, 5, 5);
  }
}
