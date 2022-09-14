import { CartService } from "./cart.service";
import { TestBed } from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("CartService", () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CartService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
