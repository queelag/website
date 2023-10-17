import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { removeArrayItems, type AracnaFile } from '@aracna/core'
import { IconFeatherUploadCloud } from '@aracna/icons-feather-react/components/upload-cloud'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import { Memo, useObservableElementComponent, type AracnaInputFileProps } from '@aracna/react'
import { AracnaButton, AracnaChip } from '@aracna/react-components'
import { AracnaInputFile } from '@aracna/react-components/components/input/input-file'
import { joinElementClasses } from '@aracna/web'

export function InputFileComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) =>
          ['normalized', 'readonly'].includes(item.name)
        ),
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
                <div
                  className={joinElementClasses(
                    'w-64 h-64 flex flex-col justify-center items-center gap-1 p-6 rounded border-2 border-dashed border-slate-800',
                    'transition group-hover:border-slate-700 group-focus:border-slate-700'
                  )}
                >
                  <IconFeatherUploadCloud size={48} stroke='white' stroke-width={0.7} />
                  <span className='text-xs font-medium'>Drag and drop files here</span>
                </div>
              </AracnaInputFile>
            </Memo>
            {!props.native && element?.isFilesNotEmpty && (
              <div className='flex flex-wrap justify-center gap-1'>
                {element?.files.map((file: AracnaFile) => (
                  <AracnaChip className='flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded bg-slate-800' key={file.id}>
                    <span className='text-xs font-medium'>{file.name}</span>
                    <AracnaButton
                      className='rounded-full transition ring-slate-600 hover:bg-slate-600 hover:ring-4 active:ring-2'
                      onClick={() => element?.removeFile(file)}
                      size={12}
                    >
                      <IconFeatherX size={12} stroke='white' />
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
