import express from "express";
import path from "path";
import { Resend } from "resend";

const app = express();
const port = parseInt(process.env.PORT || "8080");

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(
  "/assets",
  express.static(path.join(import.meta.dirname, "dist", "assets"), {
    maxAge: "1y",
    immutable: true,
  })
);
app.use(express.static(path.join(import.meta.dirname, "dist"), { maxAge: 0 }));

app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const emailSendResponse = await resend.emails.send({
      from: "Website Contact <contact@brunoluvizotto.com>",
      to: "brunoluvizotto@gmail.com",
      replyTo: email,
      subject: `Website Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    console.log({ emailSendResponse });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.get("/{*path}", (_req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(import.meta.dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
