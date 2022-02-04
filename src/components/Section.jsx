import React from 'react';

export default function Section() {
  return <div>
      <section class="boxes">
        <div class="container">
            <div class="box">
                <h2>Alignment & Space</h2>
                <p>
                    A more efficient way to lay out, 
                    align and distribute space among items in a container.
                </p>
            </div>
            <div class="box">
                <h2>Tricky Positioning</h2>
                <p>
                    Flexbox usually solves tricky problems including how to position
                    or dynamically resize elements on a page.
                </p>
            </div>
            <div class="box">
                <h2>Responsive Design</h2>
                <p>
                    Flexbox makes building a website layout and making it responsive,
                    much, much easier.
                </p>
            </div>
        </div>
    </section>
  </div>;
}
