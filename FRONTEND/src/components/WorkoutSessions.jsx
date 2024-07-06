import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Intense full-body circuit with HIIT intervals for maximum calorie burn. Incorporate compound movements like squats, deadlifts, and burpees. Finish with a cooldown and stretching session for recovery.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Discover our featured bootcamps, designed to push your limits and transform your fitness. Join us for high-energy sessions that deliver results fast!







        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength and Conditioning Bootcamp</h4>
            <p>
            Build muscle and endurance with a mix of weightlifting and bodyweight exercises. Perfect for all fitness levels aiming for strength gains.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
            Burn calories and improve cardiovascular health with high-intensity interval training. Get ready for sprints, jump ropes, and dynamic cardio drills.
            </p>
          </div>
          <div>
            <h4>Core and Abs Bootcamp</h4>
            <p>
            Focus on your midsection with targeted exercises to strengthen and define your core. Ideal for those looking to improve stability and achieve a toned stomach.
            </p>
          </div>
          <div>
            <h4>Flexibility and Mobility Bootcamp</h4>
            <p>
            Enhance your range of motion and prevent injuries with stretching and mobility drills. Great for all levels, from beginners to advanced athletes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;