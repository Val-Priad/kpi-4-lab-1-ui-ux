function Tabs() {
  return (
    <div className="card">
      <h3>4. Tabs</h3>
      <div className="widget">
        <div className="tabs">
          <input type="radio" id="overview" name="tabs" defaultChecked />
          <label htmlFor="overview">Orcs</label>

          <input type="radio" id="experience" name="tabs" />
          <label htmlFor="experience">Elves</label>

          <input type="radio" id="awards" name="tabs" />
          <label htmlFor="awards">Undead</label>
        </div>

        <div className="tab-content">
          <div className="tab-content-1">
            <h2>Orcs</h2>
            <p>
              Orcs are strong, fierce warriors with rough appearances and
              formidable physical strength. Their tribes live in harsh lands,
              following ancient traditions. Orcs value honesty, courage, and a
              fighting spirit. Often distrustful of other races, they are loyal
              to their comrades. They are masters of survival and hunting, as
              well as skilled blacksmiths.
            </p>
          </div>

          <div className="tab-content-2">
            <h2>Elves</h2>
            <p>
              Elves are graceful, long-lived beings with delicate beauty and
              elegance. They live in forests and natural enclaves, close to
              magic and harmony. Elves possess sharp minds, mastery in archery,
              and natural magic. They have a sense of aesthetics and knowledge
              of ancient legends. Friendly, but cautious with strangers.
            </p>
          </div>

          <div className="tab-content-3">
            <h2>Undead</h2>
            <p>
              The Undead are beings deprived of life yet possessing
              consciousness and power. They walk the earth, cursed and cold.
              Their goals vary: from seeking revenge on the living to
              performing dark rituals. The Undead often avoid light and living
              creatures but possess magical abilities. Their presence instills
              fear, and their patience and cunning make them dangerous.
            </p>
          </div>
        </div>
      </div>
      <p className="card-text">
        Tabs organize content into separate sections, allowing users to switch
        between views without leaving the page. They improve navigation, reduce
        clutter, and make complex interfaces more manageable.
      </p>
    </div>
  );
}

export default Tabs;
