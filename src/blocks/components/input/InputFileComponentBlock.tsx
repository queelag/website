import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeather } from '@/components/IconFeather'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { ICON_F_UPLOAD_CLOUD, ICON_F_X } from '@aracna-icons/feather'
import { removeArrayItems, type AracnaFile } from '@aracna/core'
import { Memo } from '@aracna/react'
import { useObservableElementComponent, type AracnaInputFileProps } from '@aracna/react-components'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaInputFile } from '@aracna/react-components/components/input/input-file'
import { jec } from '@aracna/web'

export function InputFileComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => ['readonly'].includes(item.name)),
        { name: 'deserialize-file-resolve-array-buffer', type: 'boolean' },
        { name: 'deserialize-file-resolve-text', type: 'boolean' },
        { name: 'multiple', type: 'boolean' }
      ]}
      component={(props: AracnaInputFileProps) => {
        const { element, onStateChange, ref } = useObservableElementComponent<'aracna-input-file'>({ whitelist: ['value'] })

        return (
          <div className='flex flex-col items-center gap-2'>
            <Memo deps={[props]}>
              <AracnaInputFile {...props} className='group' onStateChange={onStateChange} ref={ref}>
                <input className='absolute inset-0 opacity-0 cursor-pointer' type='file' />
                <div
                  className={jec(
                    'w-64 h-64 flex flex-col justify-center items-center gap-1 p-6 rounded border-2 border-dashed border-slate-800',
                    'transition group-hover:border-slate-700 group-focus:border-slate-700'
                  )}
                >
                  <IconFeather size={48} src={ICON_F_UPLOAD_CLOUD} stroke='white' stroke-width={0.7} />
                  <span className='text-xs font-medium'>Drag and drop files here</span>
                </div>
              </AracnaInputFile>
            </Memo>
            {element?.isFilesNotEmpty && (
              <div className='flex flex-wrap justify-center gap-1'>
                {element?.files.map((file: AracnaFile) => (
                  <AracnaChip className='flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded bg-slate-800' key={file.id}>
                    <span className='text-xs font-medium'>{file.name}</span>
                    <AracnaButton
                      className='rounded-full transition ring-slate-600 hover:bg-slate-600 hover:ring-4 active:ring-2'
                      onClick={() => element?.removeFile(file)}
                      size={12}
                    >
                      <IconFeather size={12} src={ICON_F_X} stroke='white' />
                    </AracnaButton>
                  </AracnaChip>
                ))}
              </div>
            )}
          </div>
        )
      }}
      defaultProps={{}}
    />
  )
}
