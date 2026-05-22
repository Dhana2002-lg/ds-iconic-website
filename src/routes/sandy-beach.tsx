import { createFileRoute } from "@tanstack/react-router";
import SandyBeach from "@/pages/sandybeach";

export const Route = createFileRoute("/sandy-beach")({
  component: SandyBeach,
});