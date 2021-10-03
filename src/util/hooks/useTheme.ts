import { ref, onMounted, watch, Ref } from "vue";

const themeList = {
  dark: "theme-dark",
  pink: "theme-pink",
};

type ThemeType = Ref<"dark" | "pink">;

function useTheme(): ThemeType {
  const theme: ThemeType = ref("dark");

  watch(theme, () => {
    document.body.className = themeList[theme.value];
  });

  onMounted(() => {
    document.body.className = themeList[theme.value];
  });
  return theme;
}

export default useTheme;
