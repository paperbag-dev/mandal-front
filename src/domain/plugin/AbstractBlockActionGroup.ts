import React from 'react';

export default abstract class AbstractBlockActionGroup {

  onHover (event: React.MouseEvent<HTMLElement>): void {
    console.log('default hovering'+event.clientX);
  }

  onLeftClick (): void {
    //TODO 복합액션 제어
  }

  onCtrlClick (): void {

  }
}