import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component';
import { NameComponent } from './create/name/name.component';
import { GenderComponent } from './create/gender/gender.component';
import { ThemeComponent } from './create/theme/theme.component';
import { StyleComponent } from './create/style/style.component';
import { LettersComponent } from './create/letters/letters.component';
import { TypeComponent } from './create/type/type.component';
import { PreviewComponent } from './create/preview/preview.component';
import { OrderComponent } from './create/order/order.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        CreateComponent,
        AboutComponent,
        NameComponent,
        GenderComponent,
        ThemeComponent,
        StyleComponent,
        LettersComponent,
        TypeComponent,
        PreviewComponent,
        OrderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
