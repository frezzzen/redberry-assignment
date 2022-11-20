<template>
  <article>
    <h1>Quam Tristique Condimentum</h1>
    <p class="paragraph">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <span> Curabitur blandit </span> tempus
      porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis
      euismod semper.
    </p>
    <div class="container">
      <div>
        <h2>Fringilla Euismod Adipiscing Ipsum</h2>
        <p class="paragraph">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis
          interdum. Aenean lacinia bibendum nulla sed.
        </p>
        <ul>
          <li>Tellus Ullamcorper Inceptos</li>
          <li>
            Magna Condimentum
            <ul>
              <li>Mattis Tristique</li>
              <li>Pharetra Pellentesque Dapibus</li>
            </ul>
          </li>
          <li>Aenean Inceptos</li>
          <li>Parturient Bibendum</li>
        </ul>
      </div>
      <div>
        <img src="@/assets/images/image.png" alt="Image" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/styles/mixins.scss';

article {
  max-width: 66rem;

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 4rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    @include responsive(1300px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }

    & > div {
      h2 {
        margin-bottom: 2rem;
      }
      p {
        margin-bottom: 2rem;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        @include responsive(600px) {
          padding: 0 3rem;
        }

        li {
          position: relative;
          &:before {
            @include custom-bullet(var(--gradient-red));
          }

          ul {
            margin-top: 1rem;
            padding-left: 2rem;

            li {
              &:before {
                @include custom-bullet(var(--gradient-metal-light));
              }
            }
          }
        }
      }
    }
  }
}
</style>
