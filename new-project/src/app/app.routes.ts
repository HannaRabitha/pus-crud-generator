import { ExtraOptions, PreloadAllModules, Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "hotels",
    pathMatch: "full",
  },
  // {
  //   path: "hotels",
  //   component: HotelListComponent,
  // },
];

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};
