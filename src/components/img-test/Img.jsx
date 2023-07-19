import React from "react";
import "./img.css";
import Test from "../image/test.jpg";
function Img() {
  return (
    <div>
      <div className="image-container">
        <img
          src={Test}
          alt="Your Image"
          style={{ height: "50%", width: "100%" }}
        />
        <div className="text-overlay-0">
          <h2>Allocation</h2>
          <p>
            When objects are created in Java, memory is allocated from the heap
            to store those objects. The Java heap is a region of memory
            dedicated to dynamically allocating and deallocating objects during
            the execution of a Java application
          </p>
        </div>
        <div className="text-overlay-1">
          <h2>Garbage Detection</h2>
          <p>
            As the application runs, objects that are no longer reachable by the
            program are considered garbage and eligible for collection. Java
            employs automatic garbage collection, where the responsibility of
            reclaiming memory is handled by the JVM rather than the programmer.
          </p>
        </div>

        <div className="text-overlay-2">
          <h2>Mark and Sweep</h2>
          <p>
            When objects are created in Java, memory is allocated from the heap
            to store those objects. The Java heap is a region of memory
            dedicated to dynamically allocating and deallocating objects during
            the execution of a Java application
          </p>
        </div>
        <div className="text-overlay-3">
          <h2>GC Algorithms</h2>
          <p>
            When objects are created in Java, memory is allocated from the heap
            to store those objects. The Java heap is a region of memory
            dedicated to dynamically allocating and deallocating objects during
            the execution of a Java application
          </p>
        </div>
        <div className="text-overlay-4">
          <h2>GC Tuning</h2>
          <p>
            The JVM provides various GC tuning options that allow you to
            configure the GC algorithm, heap size, and other parameters based on
            your application's needs. Tuning GC settings can help optimize
            memory usage, reduce pause times, and improve overall application
            performance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Img;
