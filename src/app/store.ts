import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { todoReducer } from './reducers/'

@NgModule({
    imports: [StoreModule.provideStore({ reducer: todoReducer })]
})
export class AppStoreModule {
}
