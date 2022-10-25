<template>
  <div class="demo demo-card">
    <quark-card
      title="This is title"
      tips="$ 100"
      content="This is content of Card"
    >
      <div slot="desc" style="font-size: 14px; color: #999; padding-top: 14px"
        >footer content</div
      >
    </quark-card>

    <quark-card
      title="This is title"
      tips="$ 100"
      content="This is loooooooong text content of Card"
      desc="footer content"
    ></quark-card>
  </div>
</template>

<style src="./demo.scss"></style>
