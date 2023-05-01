import React from "react";

const Support = () => {
  return (
    <div>
      <script
        type="text/javascript"
        src="https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.js"
      ></script>
      <style type="text/css" media="screen, projection"></style>
      <iframe
        title="Feedback Form"
        class="freshwidget-embedded-form"
        id="freshwidget-embedded-form"
        src="https://passcoder.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded"
        scrolling="no"
        height="500px"
        width="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Support;
