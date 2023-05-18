export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[360px] text-center font-sans leading-relaxed">
        Você ainda não resgistrou nenhuma lembrança, comece a{' '}
        <a className="underline hover:text-gray-50" href="">
          criar agora
        </a>
        !
      </p>
    </div>
  )
}
