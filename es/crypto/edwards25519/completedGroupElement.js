"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedGroupElement = void 0;
var fieldElement_1 = require("./fieldElement");
/**
 * Group elements are members of the elliptic curve -x^2 + y^2 = 1 + d * x^2 *
 * y^2 where d = -121665/121666.
 * CompletedGroupElement: ((X:Z),(Y:T)) satisfying x=X/Z, y=Y/T
 */
var CompletedGroupElement = /** @class */ (function () {
    /**
     * Create a new instance of CompletedGroupElement.
     * @param X The X element.
     * @param Y The Y Element.
     * @param Z The Z Element.
     * @param T The T Element.
     */
    function CompletedGroupElement(X, Y, Z, T) {
        this.X = X !== null && X !== void 0 ? X : new fieldElement_1.FieldElement();
        this.Y = Y !== null && Y !== void 0 ? Y : new fieldElement_1.FieldElement();
        this.Z = Z !== null && Z !== void 0 ? Z : new fieldElement_1.FieldElement();
        this.T = T !== null && T !== void 0 ? T : new fieldElement_1.FieldElement();
    }
    /**
     * Group Element add
     * @param p The extended group element.
     * @param q The cached group element.
     */
    CompletedGroupElement.prototype.add = function (p, q) {
        var t0 = new fieldElement_1.FieldElement();
        this.X.add(p.Y, p.X);
        this.Y.sub(p.Y, p.X);
        this.Z.mul(this.X, q.yPlusX);
        this.Y.mul(this.Y, q.yMinusX);
        this.T.mul(q.T2d, p.T);
        this.X.mul(p.Z, q.Z);
        t0.add(this.X, this.X);
        this.X.sub(this.Z, this.Y);
        this.Y.add(this.Z, this.Y);
        this.Z.add(t0, this.T);
        this.T.sub(t0, this.T);
    };
    /**
     * Group Element substract.
     * @param p The p.
     * @param q The q.
     */
    CompletedGroupElement.prototype.sub = function (p, q) {
        var t0 = new fieldElement_1.FieldElement();
        this.X.add(p.Y, p.X);
        this.Y.sub(p.Y, p.X);
        this.Z.mul(this.X, q.yMinusX);
        this.Y.mul(this.Y, q.yPlusX);
        this.T.mul(q.T2d, p.T);
        this.X.mul(p.Z, q.Z);
        t0.add(this.X, this.X);
        this.X.sub(this.Z, this.Y);
        this.Y.add(this.Z, this.Y);
        this.Z.sub(t0, this.T);
        this.T.add(t0, this.T);
    };
    /**
     * Mixed add.
     * @param p The p.
     * @param q The q.
     */
    CompletedGroupElement.prototype.mixedAdd = function (p, q) {
        var t0 = new fieldElement_1.FieldElement();
        this.X.add(p.Y, p.X);
        this.Y.sub(p.Y, p.X);
        this.Z.mul(this.X, q.yPlusX);
        this.Y.mul(this.Y, q.yMinusX);
        this.T.mul(q.xy2d, p.T);
        t0.add(p.Z, p.Z);
        this.X.sub(this.Z, this.Y);
        this.Y.add(this.Z, this.Y);
        this.Z.add(t0, this.T);
        this.T.sub(t0, this.T);
    };
    /**
     * Mixed subtract.
     * @param p The p.
     * @param q The q.
     */
    CompletedGroupElement.prototype.mixedSub = function (p, q) {
        var t0 = new fieldElement_1.FieldElement();
        this.X.add(p.Y, p.X);
        this.Y.sub(p.Y, p.X);
        this.Z.mul(this.X, q.yMinusX);
        this.Y.mul(this.Y, q.yPlusX);
        this.T.mul(q.xy2d, p.T);
        t0.add(p.Z, p.Z);
        this.X.sub(this.Z, this.Y);
        this.Y.add(this.Z, this.Y);
        this.Z.sub(t0, this.T);
        this.T.add(t0, this.T);
    };
    /**
     * Convert to projective element.
     * @param p The projective element to fill.
     */
    CompletedGroupElement.prototype.toProjective = function (p) {
        p.X.mul(this.X, this.T);
        p.Y.mul(this.Y, this.Z);
        p.Z.mul(this.Z, this.T);
    };
    /**
     * Convert to extended element.
     * @param e The extended element to fill.
     */
    CompletedGroupElement.prototype.toExtended = function (e) {
        e.X.mul(this.X, this.T);
        e.Y.mul(this.Y, this.Z);
        e.Z.mul(this.Z, this.T);
        e.T.mul(this.X, this.Y);
    };
    return CompletedGroupElement;
}());
exports.CompletedGroupElement = CompletedGroupElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVkR3JvdXBFbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9lZHdhcmRzMjU1MTkvY29tcGxldGVkR3JvdXBFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BLCtDQUE4QztBQUk5Qzs7OztHQUlHO0FBQ0g7SUFxQkk7Ozs7OztPQU1HO0lBQ0gsK0JBQVksQ0FBZ0IsRUFBRSxDQUFnQixFQUFFLENBQWdCLEVBQUUsQ0FBZ0I7UUFDOUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsR0FBSSxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRCxDQUFDLGNBQUQsQ0FBQyxHQUFJLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFELENBQUMsY0FBRCxDQUFDLEdBQUksSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsR0FBSSxJQUFJLDJCQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG1DQUFHLEdBQVYsVUFBVyxDQUF1QixFQUFFLENBQXFCO1FBQ3JELElBQU0sRUFBRSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksbUNBQUcsR0FBVixVQUFXLENBQXVCLEVBQUUsQ0FBcUI7UUFDckQsSUFBTSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3Q0FBUSxHQUFmLFVBQWdCLENBQXVCLEVBQUUsQ0FBMEI7UUFDL0QsSUFBTSxFQUFFLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENB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LENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSSwwQ0FBVSxHQUFqQixVQUFrQixDQUF1QjtRQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBeklELElBeUlDO0FBeklZLHNEQUFxQiJ9