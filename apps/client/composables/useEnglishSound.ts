import { useCourseStore } from "~/store/course";

var audio = new Audio();
export function useEnglishSound(word: Ref<string>) {
  watchEffect(() => {
    audio.src = `https://dict.youdao.com/dictvoice?audio=${word.value}&type=1`;
  });

  return {
    play: () => {
      audio.play();
    },
  };
}

const word = ref("");
export function useCurrentStatementEnglishSound() {
  const coursesStore = useCourseStore();

  watchEffect(() => {
    word.value = coursesStore.currentStatement?.english;
    console.log(word)
  });

  const sound = useEnglishSound(word);

  return {
    sound,
  };
}

