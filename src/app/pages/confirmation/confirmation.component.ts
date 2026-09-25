import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingData } from '../../models/booking.model';
import { InrFormatPipe } from '../../pipes/inr-format.pipe';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink, InrFormatPipe],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit, AfterViewInit {
  @ViewChild('sigCanvas') sigCanvas!: ElementRef<HTMLCanvasElement>;
  
  booking: BookingData | null = null;
  assignedTechnician = {
    name: 'Suresh Kumar',
    rating: 4.92,
    jobsCompleted: 1240,
    phone: '+91 98201 54321',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  };

  private isDrawing = false;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.booking = this.bookingService.getBookingState();
    if (this.booking && !this.booking.bookingReference) {
      this.bookingService.markPaymentAsPaid();
      this.booking = this.bookingService.getBookingState();
    }
  }

  ngAfterViewInit(): void {
    if (this.sigCanvas) {
      const canvas = this.sigCanvas.nativeElement;
      this.ctx = canvas.getContext('2d');
      if (this.ctx) {
        this.ctx.strokeStyle = '#1D4ED8';
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
      }
    }
  }

  // HTML5 Canvas Signature Event Handlers (WT Syllabus Unit I & II)
  startDrawing(event: MouseEvent | TouchEvent): void {
    this.isDrawing = true;
    const pos = this.getPos(event);
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
    }
  }

  draw(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing || !this.ctx) return;
    const pos = this.getPos(event);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
  }

  stopDrawing(): void {
    this.isDrawing = false;
  }

  clearSignature(): void {
    if (this.ctx && this.sigCanvas) {
      const canvas = this.sigCanvas.nativeElement;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  private getPos(event: MouseEvent | TouchEvent): { x: number; y: number } {
    if (!this.sigCanvas) return { x: 0, y: 0 };
    const rect = this.sigCanvas.nativeElement.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (event.touches && event.touches[0]) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  printInvoice(): void {
    window.print();
  }
}
