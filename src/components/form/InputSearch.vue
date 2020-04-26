<template>
       <div class="vps-input-search-wrap">
        <input type="text" class="vps-input-search-input" placeholder="Search ...">
        <div class="vps-input-search-input-append">
          <icon name="search"/>
        </div>
      </div>
</template>

<script>
import icon from '../icons'
export default {
name:'input-search',
components:{
    icon
}
}
</script>

<style lang="scss">
@mixin centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

 .vps-input-search-wrap {
            @include centered();
            width: 100%;
        }
        .vps-input-search-input {
            &::placeholder {
                color: #aaa
            }
            background: rgba(81, 81, 81, .5);
            max-width: 300px;

            color: #f7f3f3;
            display: block;
            width: 78%;
            height: calc(2.25rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            background-clip: padding-box;
            border: none;
            border-radius: 4px 0 0 4px;
            outline: none;
            transition: border-color .15s ease-in-out,
            box-shadow .15s ease-in-out;
            &-append {
                background: rgba(81, 81, 81, .5);
                border-radius: 0 4px 4px 0;
                height: calc(2.25rem + 2px);
                padding: .375rem .75rem;
                @include centered();
                cursor: pointer;
            }
        }
</style>
