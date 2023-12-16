import { VisibilityController } from '@aracna/core'
import { observe } from '@aracna/state-manager'

export const DialogController = new VisibilityController()

// @ts-ignore
observe(DialogController, ['data'])
