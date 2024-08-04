// try catch and throw

function d(a, b) {
  try {
    if (b == 0) {
      throw new Error("cant divide");
    } else {
      console.log(a / b);
    }
  } catch (err) {
    console.log(err.message);
  }
}

d(10, 2);
