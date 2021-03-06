// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import deployModule from 'deploy/module';

describe('Deploy controller', () => {
  /** @type {!DeployController} */
  let ctrl;
  /** @type {!ui.router.$state} */
  let state;

  beforeEach(() => {
    angular.mock.module(deployModule.name);

    angular.mock.inject(($componentController, $state) => {
      state = $state;
      state.current.name = 'current-state';
      spyOn(state, 'go');
      ctrl = $componentController('kdDeploy', {$state, state});
    });
  });

  it('should change selection', () => {
    expect(ctrl.selection).toBe('current-state');

    ctrl.changeSelection();

    expect(state.go).toHaveBeenCalledWith('current-state');
  });
});
