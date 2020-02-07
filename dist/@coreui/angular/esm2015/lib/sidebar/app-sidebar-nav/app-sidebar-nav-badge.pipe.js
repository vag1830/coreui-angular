import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let AppSidebarNavBadgePipe = class AppSidebarNavBadgePipe {
    transform(item, args) {
        const classes = {
            badge: true
        };
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        classes[item.badge.class] = !!item.badge.class;
        return classes;
    }
};
AppSidebarNavBadgePipe = __decorate([
    Pipe({
        name: 'appSidebarNavBadge'
    })
], AppSidebarNavBadgePipe);
export { AppSidebarNavBadgePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBRWpDLFNBQVMsQ0FBQyxJQUFTLEVBQUUsSUFBVTtRQUM3QixNQUFNLE9BQU8sR0FBRztZQUNkLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztRQUNGLE1BQU0sT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBRUYsQ0FBQTtBQVpZLHNCQUFzQjtJQUhsQyxJQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsb0JBQW9CO0tBQzNCLENBQUM7R0FDVyxzQkFBc0IsQ0FZbEM7U0FaWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZCYWRnZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZCYWRnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICBiYWRnZTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcclxuICAgIGNsYXNzZXNbdmFyaWFudF0gPSAhIWl0ZW0uYmFkZ2UudmFyaWFudDtcclxuICAgIGNsYXNzZXNbaXRlbS5iYWRnZS5jbGFzc10gPSAhIWl0ZW0uYmFkZ2UuY2xhc3M7XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==