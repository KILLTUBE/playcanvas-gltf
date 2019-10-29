import { AnimationClip } from "./AnimationClip";
import { AnimationClipSnapshot } from "./AnimationClipSnapshot";
import { AnimationComponent } from "./AnimationComponent";
import { AnimationCurveType, AnimationCurve } from "./AnimationCurve";
import { AnimationEvent } from "./AnimationEvent";

import {
	AnimationKeyableType,
	new_AnimationKeyable,
	AnimationKeyable_linearBlendValue
} from "./AnimationKeyable";

import { AnimationKeyableNum } from "./AnimationKeyableNum";
import { AnimationKeyableVec } from "./AnimationKeyableVec";
import { AnimationKeyableQuat } from "./AnimationKeyableQuat";
import { AnimationKeyableNumCubicSpline } from "./AnimationKeyableNumCubicSpline";
import { AnimationKeyableVecCubicSpline } from "./AnimationKeyableVecCubicSpline";
import { AnimationKeyableQuatCubicSpline } from "./AnimationKeyableQuatCubicSpline";
import { AnimationSession } from "./AnimationSession";
import {
	TargetPath,
	AnimationTarget
} from "./AnimationTarget";

Object.assign(window, {
	AnimationClip,
	AnimationClipSnapshot,
	AnimationComponent,
	AnimationCurveType,
	AnimationCurve,
	AnimationEvent,
	AnimationKeyableType,
	new_AnimationKeyable,
	AnimationKeyable_linearBlendValue,
	AnimationKeyableNum,
	AnimationKeyableVec,
	AnimationKeyableQuat,
	AnimationKeyableNumCubicSpline,
	AnimationKeyableVecCubicSpline,
	AnimationKeyableQuatCubicSpline,
	AnimationSession,
	TargetPath,
	AnimationTarget
})