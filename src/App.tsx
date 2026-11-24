import { Button } from "./components/ui/Button";
import { TextField } from "./components/ui/TextField";

export default function App() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[var(--color-bg,#f4f7fb)] px-4 py-8">
      <section className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1
            className="text-3xl font-bold text-[var(--color-navy,#0b2a5b)] sm:text-4xl"
            style={{ fontFamily: "var(--font-display, Inter, system-ui, sans-serif)" }}
          >
            CEUMA Sem Perder
          </h1>
          <p className="text-base text-[var(--color-muted,#586a80)]">
            Escolha se deseja continuar ou cancelar.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-3">
          <div className="mb-1 w-full max-w-[342px] text-start">
            <TextField label="Buscar setores" placeholder="Ex.: Laboratório 2" />
          </div>
          <Button variant="primary">Continuar</Button>
          <Button variant="secondary">Cancelar</Button>
        </div>
      </section>
    </main>
  );
}
