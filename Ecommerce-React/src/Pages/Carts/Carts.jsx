import "./Carts.css";

export default function Carts() {
  return (
    <>
      <div class="outerContainer" id="outerContainer">
        <div class="container" id="container">
          <div class="left-portion">
            <h2 class="heading2">OrderDetails</h2>
            <hr />

            <div class="row1">

              <div class="item-img" id="item-img">
                <img className="image" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
              </div>

              <div class="Product-price" id="Product-price">
                <div class="product-name">Some Product</div>
                <div class="product-price">&#8377; 10000</div>
              </div>

              <div class="quantity">
                <div class="qty">Quantity</div>
                <select name="min-price" class="quantity1" id="quantity1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <button class="btn2" id="btn2">
                  Remove
                </button>
              </div>

            </div>

          </div>
          <div class="innerPortion-col">
            <div class="innerContainer1">
              <h3>Price Details</h3>
              <div class="price1" id="price">
                <div>Price</div>
                <div>&#8377; 10000</div>
              </div>
              <div class="discount">
                <div>Discount</div>
                <div>&#8377; 10</div>
              </div>
              <div class="charges">
                <div>Delivery Charges</div>
                <div>Free</div>
              </div>
              <div class="total" id="total">
                <div>Total</div>
                <div>&#8377; 9990</div>
              </div>
            </div>

            <div class="buttons2">
              <a href="productList.html" class="Continue-shopping-btn">
                Continue Shopping
              </a>
              <a href="#" class="checkout-btn">
                Check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
