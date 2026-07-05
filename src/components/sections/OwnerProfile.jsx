import { tokens } from "../../config/tokens";

export const OwnerProfile = () => (
  <section
    style={{
      background: "#0f1117",
      padding: "100px 24px",
      fontFamily: tokens.fonts.body,
      overflow: "hidden",
      position: "relative",
    }}
  >
    {/* Decorative blobs */}
    <div
      style={{
        position: "absolute",
        top: -80,
        right: -80,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${tokens.colors.clay}22 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: -60,
        left: -60,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, #6b8f7122 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      {/* Profile photo */}
      <div style={{ position: "relative" }}>
        {/* Decorative frame */}
        <div
          style={{
            position: "absolute",
            top: -16,
            left: -16,
            right: 16,
            bottom: 16,
            border: `1px solid ${tokens.colors.clay}50`,
            borderRadius: 4,
            pointerEvents: "none",
          }}
        />
        <img
          src="/owner.jpg"
          alt="Sanju — Founder of Novella"
          style={{
            width: "100%",
            aspectRatio: "3/4",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: 4,
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        />
        {/* Clay accent strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${tokens.colors.clay}, transparent)`,
            zIndex: 2,
          }}
        />
      </div>

      {/* Text content */}
      <div>
        <p
          style={{
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: tokens.colors.clay,
            marginBottom: 20,
            fontWeight: 500,
          }}
        >
          The Founder
        </p>

        <h2
          style={{
            fontFamily: tokens.fonts.display,
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.05,
            margin: "0 0 28px",
            letterSpacing: -1,
          }}
        >
          Dressed in her{" "}
          <em style={{ fontStyle: "italic", color: tokens.colors.clay }}>
            own story.
          </em>
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            marginBottom: 20,
            maxWidth: 440,
          }}
        >
          Novella was born from Sanju's belief that fashion is the quietest
          form of self-expression. After years of searching for pieces that
          spoke to her — elevated yet wearable, minimal yet soulful — she
          decided to create them herself.
        </p>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 440,
          }}
        >
          Every Novella piece is chosen with the same quiet intention she
          brought to that first collection: that getting dressed in the morning
          should feel like an act of authorship, not obligation.
        </p>

        <div
          style={{
            display: "flex",
            gap: 40,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 32,
          }}
        >
          {[
            { label: "Founded", value: "2022" },
            { label: "Pieces Curated", value: "200+" },
            { label: "Happy Customers", value: "5K+" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Signature */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontFamily: tokens.fonts.display,
              fontSize: 36,
              fontStyle: "italic",
              color: tokens.colors.clay,
              lineHeight: 1,
            }}
          >
            Sanju
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            Founder & Creative Director
          </div>
        </div>
      </div>
    </div>
  </section>
);
