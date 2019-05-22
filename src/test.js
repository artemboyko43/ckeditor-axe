// Add extra plugin.
CKEDITOR.config.extraPlugins = "balloonpanel";

CKEDITOR.replace("editor1");

function test() {
  // Create Doc object for axe-core library.
  let doc = document.implementation.createHTMLDocument("New Document");
  let p = doc.createElement("p");
  p.innerHTML = CKEDITOR.instances.editor1.document.getBody().getHtml();
  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  console.log(doc);

  // Axe core demo with image-alt.
  axe.run(
    doc,
    {
      runOnly: {
        type: "rule",
        values: ["image-alt"]
      }
    },
    function(err, results) {
      console.log("buu");
      console.log(results);
      console.log(err);

      // @todo handle all violations not just first item.
      if (
        typeof results.violations !== "undefined" &&
        results.violations.length > 0
      ) {
        let title = "<p>" + results.violations[0].help + "</p>";
        let content = "<p>" + results.violations[0].description + "</p>";
        let panel = new CKEDITOR.ui.balloonPanel(CKEDITOR.instances.editor1, {
          title: title,
          content: content
        });

        // Balloon panel demo.
        panel.attach(document.querySelectorAll("#test_image"));
      }
    }
  );
}

setTimeout(test, 2000);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFkZCBleHRyYSBwbHVnaW4uXG5DS0VESVRPUi5jb25maWcuZXh0cmFQbHVnaW5zID0gXCJiYWxsb29ucGFuZWxcIjtcblxuQ0tFRElUT1IucmVwbGFjZShcImVkaXRvcjFcIik7XG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gIC8vIENyZWF0ZSBEb2Mgb2JqZWN0IGZvciBheGUtY29yZSBsaWJyYXJ5LlxuICBsZXQgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiTmV3IERvY3VtZW50XCIpO1xuICBsZXQgcCA9IGRvYy5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC5pbm5lckhUTUwgPSBDS0VESVRPUi5pbnN0YW5jZXMuZWRpdG9yMS5kb2N1bWVudC5nZXRCb2R5KCkuZ2V0SHRtbCgpO1xuICB0cnkge1xuICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKHApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhkb2MpO1xuXG4gIC8vIEF4ZSBjb3JlIGRlbW8gd2l0aCBpbWFnZS1hbHQuXG4gIGF4ZS5ydW4oXG4gICAgZG9jLFxuICAgIHtcbiAgICAgIHJ1bk9ubHk6IHtcbiAgICAgICAgdHlwZTogXCJydWxlXCIsXG4gICAgICAgIHZhbHVlczogW1wiaW1hZ2UtYWx0XCJdXG4gICAgICB9XG4gICAgfSxcbiAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnV1XCIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICAvLyBAdG9kbyBoYW5kbGUgYWxsIHZpb2xhdGlvbnMgbm90IGp1c3QgZmlyc3QgaXRlbS5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHJlc3VsdHMudmlvbGF0aW9ucyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICByZXN1bHRzLnZpb2xhdGlvbnMubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiPHA+XCIgKyByZXN1bHRzLnZpb2xhdGlvbnNbMF0uaGVscCArIFwiPC9wPlwiO1xuICAgICAgICBsZXQgY29udGVudCA9IFwiPHA+XCIgKyByZXN1bHRzLnZpb2xhdGlvbnNbMF0uZGVzY3JpcHRpb24gKyBcIjwvcD5cIjtcbiAgICAgICAgbGV0IHBhbmVsID0gbmV3IENLRURJVE9SLnVpLmJhbGxvb25QYW5lbChDS0VESVRPUi5pbnN0YW5jZXMuZWRpdG9yMSwge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJhbGxvb24gcGFuZWwgZGVtby5cbiAgICAgICAgcGFuZWwuYXR0YWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGVzdF9pbWFnZVwiKSk7XG4gICAgICB9XG4gICAgfVxuICApO1xufVxuXG5zZXRUaW1lb3V0KHRlc3QsIDIwMDApO1xuIl0sImZpbGUiOiJ0ZXN0LmpzIn0=
