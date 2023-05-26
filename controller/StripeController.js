/** @format */

app.post("/create-charge", async (req, res) => {
  const token = req.body.token; // Token received from the client-side Stripe Checkout component

  try {
    const charge = await stripe.charges.create({
      amount: 1000, // Amount in cents
      currency: "USD",
      source: token,
      description: "Payment for My Store",
    });

    // Handle the charge object or any additional actions

    res.status(200).json({ message: "Charge created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating charge" });
  }
});
