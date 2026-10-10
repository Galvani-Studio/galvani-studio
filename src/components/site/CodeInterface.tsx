"use client";
import { useMotionValue, useReducedMotion, useSpring, motion } from "framer-motion";
import { Check, GitBranch, LockKeyhole } from "lucide-react";
export function CodeInterface() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 160, damping: 28 }),
    rotateY = useSpring(y, { stiffness: 160, damping: 28 });
  return (
    <div
      className="code-stage"
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((-(event.clientY - rect.top - rect.height / 2) / rect.height) * 7);
        y.set(((event.clientX - rect.left - rect.width / 2) / rect.width) * 7);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="code-aura" aria-hidden="true" />
      <motion.div className="code-window" style={reduced ? {} : { rotateX, rotateY }}>
        <div className="code-toolbar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>galvani / enterprise.ts</span>
          <span className="code-tag">DEMONSTRAÇÃO</span>
        </div>
        <div className="code-workspace">
          <div className="code-tabs">
            <span>Arquitetura</span>
            <span>Operação</span>
            <span>Entrega</span>
          </div>
          <div
            className="code-editor"
            aria-label="Exemplo ilustrativo de arquitetura de uma plataforma empresarial"
          >
            <div className="code-line">
              <span>01</span>
              <code>
                <b>const</b> platform = {"{"}
              </code>
            </div>
            <div className="code-line">
              <span>02</span>
              <code>
                {" "}
                business: <em>"sua empresa"</em>,
              </code>
            </div>
            <div className="code-line">
              <span>03</span>
              <code>
                {" "}
                architecture: <em>"sob medida"</em>,
              </code>
            </div>
            <div className="code-line">
              <span>04</span>
              <code>
                {" "}
                access: <em>"por responsabilidade"</em>,
              </code>
            </div>
            <div className="code-line">
              <span>05</span>
              <code>
                {" "}
                integrations: [<em>"API"</em>, <em>"CRM"</em>],
              </code>
            </div>
            <div className="code-line">
              <span>06</span>
              <code>
                {" "}
                ownership: <em>"seu negócio"</em>
              </code>
            </div>
            <div className="code-line">
              <span>07</span>
              <code>{"}"};</code>
            </div>
          </div>
          <div className="system-status">
            <span>
              <Check size={18} aria-hidden="true" />
              Fluxos conectados
            </span>
            <span>
              <LockKeyhole size={18} aria-hidden="true" />
              Acesso controlado
            </span>
            <span>
              <GitBranch size={18} aria-hidden="true" />
              Base preparada para evoluir
            </span>
          </div>
        </div>
        <div className="code-footer">
          <span>Design + engenharia, na mesma direção.</span>
          <span>Next.js 15</span>
        </div>
      </motion.div>
      <p className="visual-caption">
        Interface ilustrativa de arquitetura. Cada projeto tem seu próprio escopo.
      </p>
    </div>
  );
}
