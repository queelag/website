import { VisibilityController } from '@aracna/core'
import { observe } from '@aracna/state-manager'

export const OverlayController = new VisibilityController()
observe(OverlayController, ['data'])
