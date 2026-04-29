import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/Index";

describe("Aivio landing page", () => {
  it("renders the required premium SaaS structure and copy", () => {
    render(<Index />);
    const headings = screen
      .getAllByRole("heading")
      .map((heading) => heading.textContent ?? "");

    expect(
      screen.getByRole("heading", {
        name: "Бизнес без хаоса. Управляется интеллектом.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Начать использовать Aivio" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Посмотреть как работает" })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Это не CRM. Это центр управления бизнесом.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("создаёт сделки автоматически")).toBeInTheDocument();
    expect(screen.getByText("показывает финансовые риски")).toBeInTheDocument();

    expect(screen.getAllByText("Клиенты").length).toBeGreaterThan(0);
    expect(screen.getAllByText("AI Core").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Финансы").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Финансовый радар обновил прогноз"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Начните управлять бизнесом как системой",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Попробовать Aivio" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Шаблоны для отраслей, где нужен порядок в операционке",
      }),
    ).toBeInTheDocument();

    expect(headings.indexOf("Почему бизнес теряет деньги каждый день")).toBeGreaterThan(
      headings.indexOf("Бизнес без хаоса.Управляется интеллектом."),
    );
    expect(headings.indexOf("Это не CRM. Это центр управления бизнесом.")).toBeGreaterThan(
      headings.indexOf("Aivio собирает весь бизнес в одну операционную систему"),
    );
    expect(headings.indexOf("Шаблоны для отраслей, где нужен порядок в операционке")).toBeGreaterThan(
      headings.indexOf("Подключается к вашему бизнесу за минуты"),
    );
    expect(headings.indexOf("Начните управлятьбизнесом как системой")).toBeGreaterThan(
      headings.indexOf("Шаблоны для отраслей, где нужен порядок в операционке"),
    );
  });
});
